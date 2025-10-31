import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [session, setSession] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // client-side session check
    const s = supabase.auth.getSession().then(res => {
      if (res?.data?.session) {
        setSession(res.data.session);
      } else {
        // not signed in - redirect to login
        router.replace('/login');
      }
    });

    // auth listener
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace('/login');
      setSession(session);
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (!session) return;
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        // Example read: replace 'log' with your table
        const { data, error } = await supabase
          .from('log')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(200);
        if (error) throw error;
        if (mounted) setRows(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [session]);

  if (!session) return null;

  return (
    <div>
      <header className="header">
        <div className="logo">Astreon</div>
        <nav>
          <button style={{marginLeft:12}} onClick={async ()=>{await supabase.auth.signOut(); router.push('/');}}>Sign out</button>
        </nav>
      </header>

      <main className="container">
        <h2>Dashboard</h2>
        <p style={{color:'#666'}}>Signed in as <strong>{session.user.email}</strong></p>

        <section>
          <h3>Recent rows (example)</h3>
          {loading && <div style={{color:'#666'}}>Loading…</div>}
          {!loading && rows.length === 0 && <div style={{color:'#666'}}>No rows found</div>}
          {!loading && rows.length > 0 && (
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr>
                  {Object.keys(rows[0]).map(k => <th key={k} style={{textAlign:'left',padding:8,borderBottom:'1px solid #eee'}}>{k}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.id || Math.random()}>
                    {Object.keys(r).map(k => <td key={k} style={{padding:8,borderBottom:'1px solid #f5f5f5'}}>{String(r[k] ?? '')}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}
