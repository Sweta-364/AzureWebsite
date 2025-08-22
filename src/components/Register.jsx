export default function Register() {
  return (
    <section id="register">
      <h2>Join the Revolution</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Organization/Institution" required />
        <input type="tel" placeholder="Phone Number" required />
        <button type="submit">Secure Your Spot</button>
      </form>
    </section>
  );
}
