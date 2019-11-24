import React from 'react'

class PostInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', desc: '', category:'' };

        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleChangeTextArea(event) {
        this.setState({ desc: event.target.value });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    handleCategoryChange(event) {
      this.setState({ category: event.target.value })
    }
    clearValues() {
      this.setState({
        title: '',
        desc: '',
        category: ''
      });
    }
    setSuccessAlert() {
      this.setState({
        showAlert: true
      })
      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2000);
    }
    onPostClick(event) {
      event.preventDefault();
      this.props.onClick(this.state.title, this.state.desc, this.state.category);
      this.clearValues();
      this.setSuccessAlert();
    }
    render() {
        let alert;
        if (this.state.showAlert) {
          alert = (
            <div className="alert alert-primary mt-3 alert-dismissible" role="alert">
              New post added sucessfully!
            </div>
          );
        }
        return (
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" required
                onChange={this.handleChangeTitle}
                value={this.state.title}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" rows="3" placeholder="Enter description"
                onChange={this.handleChangeTextArea} required
                value={this.state.desc}>
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="cat-select">Category</label>
              <select className="form-control" id="cat-select"
                  value={this.state.category} onChange={this.handleCategoryChange}>
                <option>Choose a category</option>
                <option value="1">Buy and Sell</option>
                <option value="2">Technology related</option>
                <option value="3">IBS</option>
                <option value="4">Infopark</option>
                <option value="5">Travel</option>
                <option value="6">Sports</option>
                <option value="7">Vehicale</option>
                <option value="8">Photography</option>
                <option value="9">Miscellaneous</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={(e) => {this.onPostClick(e)}}>Post</button>
            {alert}
          </form>
        )
    }
}

export default PostInput
