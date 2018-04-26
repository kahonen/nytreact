import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
//import Card from "../../components/Card"

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    url: ""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // };

  loadArticles = () => {
    API.loadArticles(this.state.topic, this.state.startDate, this.state.endDate)

    .then(res=>
      (this.setState({
        articles:res.data.response.docs}))) 
    .catch(err=> 
      (console.log(err)))
    .then( ()=> 
    {console.log(this.state.articles)})
  };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  saveArticle = (articleData, id) => {
    API.saveArticles(articleData)
      .then(res => {
        let newArr = this.state.articles.filter(element => element._id !== id)
        this.setState({articles: newArr})
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles()
  };

  render() {
    return (
      <Container fluid style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Jumbotron />
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="What would you like to search for today?" />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Start Date"
                type="date"
                max="3000-12-31"
                min="1000-01-01" />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="End Date"
                type="date"
                max="30001231"
                min="10000101" />
              <FormBtn
                disabled={!(this.state.topic && this.state.startDate && this.state.endDate)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.web_url} target="blank">
                      <strong>
                        {article.headline.main}
                      </strong>
                      <br />
                      {article.abstract}
                    </a>
                    <SaveBtn onClick={() => this.saveArticle(article)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Articles;


