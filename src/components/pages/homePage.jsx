import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <section>
        <div>
          <h3>Fresh Ingredients</h3>
          <p>
            We use only the freshest and high-quality ingredients for our
            dishes.
          </p>
        </div>
        <div>
          <h3>Expert Chefs</h3>
          <p>Our chefs bring years of experience and passion to every meal.</p>
        </div>
        <div>
          <p>Relax and enjoy your meal in our warm and inviting environment.</p>
        </div>
        <h2>Ready to Dine With Us?</h2>
        <p>Book a table or explore our delicious menu online.</p>
        <Link className="button" to="/restaurants">
          Explore Restaurants
        </Link>
      </section>
    </>
  );
};
