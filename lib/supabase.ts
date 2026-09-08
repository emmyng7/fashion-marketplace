export const fetchProducts = async () => {
  const response = await fetch(
    "https://tbaydfcjdqkcqagvngvl.supabase.co/rest/v1/products?select=*",
    {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiYXlkZmNqZGtxY2FndmdudmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0NDY5NjAsImV4cCI6MjEwNDAyMjk2MH0.13BQrE-b-FXkux0liGONfLcFx8wW3-0TU-cLFInAKTw",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiYXlkZmNqZGtxY2FndmdudmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0NDY5NjAsImV4cCI6MjEwNDAyMjk2MH0.13BQrE-b-FXkux0liGONfLcFx8wW3-0TU-cLFInAKTw",
      },
    }
  );
  const data = await response.json();
  return data;
};