/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// const

const UserCard = ({ user }) => {
  const { firstName, lastName, about, age, gender, photoUrl } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img className="px-1" src={photoUrl} alt="user" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary">Ignored</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
