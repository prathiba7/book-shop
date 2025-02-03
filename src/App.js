import "./styles.css";
const books = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81pGO40uexL._AC_UL900_SR900,600_.jpg",
    author: "test",
    title: "Atomic habbits",
    id: 1,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81F90H7hnML._AC_UL900_SR900,600_.jpg",
    author: "test-2",
    title: "Ikigai",
    id: 2,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/81WCSu2RoJS._AC_UL900_SR900,600_.jpg",
    author: "test-2",
    title: "Ikigai",
    id: 3,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL900_SR900,600_.jpg",
    author: "test-2",
    title: "Ikigai",
    id: 4,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/61WMgOHyDaL._AC_UL900_SR900,600_.jpg",
    author: "test-2",
    title: "Ikigai",
    id: 5,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books?.map((book, index) => {
        return <Book id={index} {...book} number={index} />;
      })}
    </section>
  );
};

const Book = ({ title, img, author, number }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2> {title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};
export default function App() {
  return (
    <div>
      <h1>Amazon best seller</h1>
      <BookList />
    </div>
  );
}
