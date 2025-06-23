
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Visiest</h1>
      <p>Backend URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
