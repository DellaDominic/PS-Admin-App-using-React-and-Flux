import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            onChange={props.onTitleChange}
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""} //assigns an empty string if authorId is null
            className="form-control"
          >
            <option value="" />
            <option value="1">Allen Scott</option>
            <option value="2">Cory House</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
          />
        </div>
      </div>

      <input type="submit" value="save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
