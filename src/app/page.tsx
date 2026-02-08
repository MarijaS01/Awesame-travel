import { auth0 } from "../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <main style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Awasame Travel Portal</h1>
      {user ? (
        <div>
          <p>Willkommen zurück, {user.name}!</p>
          <a href="/auth/logout" style={{ color: 'red' }}>Logout</a>
        </div>
      ) : (
        <div>
          <p>Bitte logge dich ein.</p>
          <a href="/auth/login" style={{ 
            padding: '10px 20px', 
            background: '#0070f3', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '5px' 
          }}>Login</a>
        </div>
      )}
    </main>
  );
}
