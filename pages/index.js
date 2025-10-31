import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo">Astreon</div>
        <nav>
          <Link href="/"><a style={{marginRight:12}}>Product</a></Link>
          <Link href="/"><a style={{marginRight:12}}>Pricing</a></Link>
          <Link href="/"><a style={{marginRight:12}}>Docs</a></Link>
          <Link href="/login"><a className="cta" style={{marginLeft:12}}>Get started</a></Link>
        </nav>
      </header>

      <main className="container">
        <section style={{display:'flex',gap:20,flexWrap:'wrap',alignItems:'center'}}>
          <div style={{flex:'1 1 360px'}}>
            <h1 style={{marginTop:0}}>Accounting made simple for small teams</h1>
            <p style={{color:'#444'}}>Import transactions, reconcile bank feeds, and generate accountant-ready reports — secure and fast.</p>
            <p>
              <Link href="/login"><a className="cta">Start free</a></Link>
              <Link href="/app/dashboard"><a style={{marginLeft:12}}>See demo</a></Link>
            </p>

            <div style={{display:'flex',gap:12,marginTop:28,flexWrap:'wrap'}}>
              <div style={{flex:'1 1 200px',padding:14,border:'1px solid #f0f0f0',borderRadius:8}}>Double-entry<div style={{color: 'var(--muted)',fontSize:13}}>Accurate balancing for every transaction</div></div>
              <div style={{flex:'1 1 200px',padding:14,border:'1px solid #f0f0f0',borderRadius:8}}>Reconciliation<div style={{color: 'var(--muted)',fontSize:13}}>Match bank imports quickly</div></div>
              <div style={{flex:'1 1 200px',padding:14,border:'1px solid #f0f0f0',borderRadius:8}}>Secure<div style={{color: 'var(--muted)',fontSize:13}}>Postgres backend, RLS-ready</div></div>
              <div style={{flex:'1 1 200px',padding:14,border:'1px solid #f0f0f0',borderRadius:8}}>Exports<div style={{color: 'var(--muted)',fontSize:13}}>CSV & PDF exports for accountants</div></div>
            </div>
          </div>

          <div style={{flex:'0 1 420px'}}>
            <div style={{border:'1px solid #eee',borderRadius:8,padding:12,background:'#fafafa'}}>
              <div style={{height:260,display:'flex',alignItems:'center',justifyContent:'center',color:'#999'}}>Dashboard preview</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
