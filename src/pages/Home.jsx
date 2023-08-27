import { useDispatch, useSelector } from "react-redux";
import { FooterPokeball } from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const dispach = useDispatch()
  const navigate = useNavigate()
  //const trainer = useSelector(store => store.trainer)
  //console.log(trainer);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispach(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2>!Hello trainer!</h2>
          <p>To start give your name</p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button>Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
