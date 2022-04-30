import "./index.css";

const DeleteItem = (props) => {
  const { itemDetails, onDelete } = props;
  const { title, timeAccessed, logoUrl, domainUrl, id } = itemDetails;
  const onDeleteItem = () => {
    onDelete(id);
  };
  return (
    <li className="items-list">
      <div className="list">
        <p className="time-access">{timeAccessed}</p>
        <img src={logoUrl} alt="logo" className="logo" />
        <br />
        <p className="title">{title}</p>
        <br />
        <p className="domain">{domainUrl}</p>
      </div>

      <button className="button" onClick={onDeleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="d-logo"
        />
      </button>
    </li>
  );
};

export default DeleteItem;
