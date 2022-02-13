import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  // Get available movie details from API
  async componentDidMount() {
    const response = await fetch(
      "https://guvi-movie-ticket-booking.herokuapp.com/movies/",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailId: this.state.emailId,
          password: this.state.password,
        }),
      }
    );
    const data = await response.json();
    this.setState({ data });
  }

  render() {
    return (
      <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row"></div>

            {/* Display available movie details */}
            {this.state.data.map((movie) => {
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      movie.name
                    </h5>
                    <h6 className="card-price text-center">movie.genre</h6>
                    <hr></hr>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Movies;
