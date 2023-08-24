/* eslint-disable react/prop-types */
const Filter = ({ filterSubmit, filter, handleFilterChange }) => {
  return (
    <div>
      <form onSubmit={filterSubmit}>
        <div>
          filter shown with{" "}
          <input value={filter} onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
