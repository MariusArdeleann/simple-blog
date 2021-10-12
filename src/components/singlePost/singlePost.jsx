import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://photographylife.com/wp-content/uploads/2020/03/Dan-Ballard-Landscapes-6.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Marius</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          harum aliquam facere deleniti odio neque optio sit, quasi, tempora aut
          nobis possimus vero ipsum culpa adipisci praesentium accusamus? Labore
          atque nihil suscipit eaque, tempora illo voluptatum ducimus ipsa
          iusto! Laborum provident ab placeat nesciunt blanditiis eveniet vero
          fugit nihil, similique voluptatum soluta deserunt ipsam necessitatibus
          ratione quae asperiores? Cum, excepturi ipsum! Aspernatur magni
          officiis nesciunt ad laboriosam. Consequuntur quasi labore sequi atque
          quod itaque incidunt reiciendis quisquam delectus placeat? Eaque quo
          repellat doloremque, voluptate error temporibus aut quia maxime minima
          quisquam nesciunt a quibusdam, accusamus, atque in? Voluptatem,
          voluptas velit. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptates harum aliquam facere deleniti odio neque optio sit,
          quasi, tempora aut nobis possimus vero ipsum culpa adipisci
          praesentium accusamus? Labore atque nihil suscipit eaque, tempora illo
          voluptatum ducimus ipsa iusto! Laborum provident ab placeat nesciunt
          blanditiis eveniet vero fugit nihil, similique voluptatum soluta
          deserunt ipsam necessitatibus ratione quae asperiores? Cum, excepturi
          ipsum! Aspernatur magni officiis nesciunt ad laboriosam. Consequuntur
          quasi labore sequi atque quod itaque incidunt reiciendis quisquam
          delectus placeat? Eaque quo repellat doloremque, voluptate error
          temporibus aut quia maxime minima quisquam nesciunt a quibusdam,
          accusamus, atque in? Voluptatem, voluptas velit.
        </p>
      </div>
    </div>
  );
}
