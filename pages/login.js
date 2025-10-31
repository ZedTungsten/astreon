import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e?.preventDefault();
    setLoading(true);
    setMsg('');
    try {
      const { data, error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setMsg('Check your email for the sign-in link.');
      setEmail('');
      // for UX you might redirect to /app after magic link verifies
    } catch (err) {
      setMsg(err.message || 'Failed to send sign-in link.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <header className="header">
        <div className="logo">Astreon</div>
      </header>
      <main className="container">
        <h2>Sign in / Sign up</h2>
        <p style={{color:'#666'}}>Enter your email and we’ll send a magic sign-in link.</p>

        <form onSubmit={handleLogin} style={{maxWidth:420}}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{width:'100%',padding:8,marginTop:6,marginBottom:12}} />
          <button className="cta" disabled={loading}>{loading ? 'Sending…' : 'Send sign-in link'}</button>
        </form>

        {msg && <p style={{marginTop:12,color:'#0066ff'}}>{msg}</p>}

        <p style={{marginTop:20}}><a href="/">Back to home</a></p>
      </main>
    </div>
  );
}
