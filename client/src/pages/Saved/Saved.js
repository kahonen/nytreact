import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
//import Card from "../../components/Card"

class Saved extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.loadArticles({
    },
      (err, res) => {
        this.setState({ articles: res.data })
      }
    )
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
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
          <Col size="md-12">
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
                    <DeleteBtn onClick={() => this.deleteArticles(article)} />
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

export default Saved;


