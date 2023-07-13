import React from "react";
const HomeCards = () => {
    return (
        <div id="homecard">
        <div className="card-group">
            <div className="card">
                <img src="/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Weddings</h5>
                    <p className="card-text">The upcomings weddings event are now in your knowledge.Hurryup Join Now.</p>
                </div>
            </div>
            <div className="card">
                <img src="/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Concerts</h5>
                    <p className="card-text">The upcomings Concerts are now in your knowledge.Your beloved singers are comig.Hurryup Join Now..</p>
                </div>
            </div>
            <div className="card">
                <img src="/ibrahim-boran-aoGA9N8QNrI-unsplash.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Picnic</h5>
                    <p className="card-text">Are you feeling bore?The upcomings picnics are now in your knowledge.Hurryup Join Now.</p>
                </div>
            </div>
        </div>
        </div>)
}
export default HomeCards;