import React, {useState, useEffect} from "react";
import api from "../../utils/Api";

const Home = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        api("api/articles")
            .then(res => setArticles(res.data))
            .catch(e => console.log("Error:", e));
    }, [articles]);

    const renderArticles = () => {
        if (!articles) return;
        return (
            <div>
                {articles.map(article => <h6 key={article.objectID}>{article.title}</h6>)}
            </div>
        );
    };

    return (
        <div>
            <h1>Home Page</h1>
            {renderArticles()}
        </div>
    );
};

export default Home;