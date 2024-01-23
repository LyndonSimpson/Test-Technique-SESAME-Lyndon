import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchArticles } from '../utils/api';
import styles from './Articles.module.css';

export default function Articles() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogoff = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  useEffect(() => {
    fetchArticles()
      .then((data) => {
        setArticles(data.articles.map((item) => item.article));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
        router.push('/login');
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main className={styles.articlesContainer}>
      <button onClick={handleLogoff} className={styles.logOffButton}>Log Off</button>
        <h1>Articles</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul className={styles.articlesList}>
            {articles.map((article) => (
              <li key={article.id} className={styles.articleItem}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
              <img src={article.image} alt={article.title} className={styles.articleImage} />
                  <p className={styles.articleDescription}>{article.description}</p>
              </li>
))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}