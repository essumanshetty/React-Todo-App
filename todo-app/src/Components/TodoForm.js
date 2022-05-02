import React, { memo } from "react";

function TodoForm({
  searchInput,
  inputChangeHandler,
  onSubmitHandler,
  inputRef,
  showEdit,
  saveHandler
}) {
  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={searchInput}
          onChange={inputChangeHandler}
          ref={inputRef}
        />
        {showEdit ? (
          <button onClick={saveHandler}>Save</button>
        ) : (
          <input type="submit" value="Create" />
        )}
      </form>
    </div>
  );
}

export default memo(TodoForm);
