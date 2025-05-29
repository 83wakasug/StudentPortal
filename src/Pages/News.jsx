import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const News = () => {
  const [allPosts, setAllPosts] = useState([]);     // 全データ
  const [currentPosts, setCurrentPosts] = useState([]); // 表示中のデータ
  const [inputValue, setInputValue] = useState(''); 
  useEffect(() => {
      fetch('/Data/news.json')
        .then(response => response.json())
        .then(data => {
          setAllPosts(data);
          setCurrentPosts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    




  const handleInputChange = (e) => {
    setInputValue(e.target.value)
 
  }



  
    const search =() => {
      // 検索欄への入力が空の場合は早期return
      if (inputValue === "") {
        setCurrentPosts(allPosts);
        return;
      }

      const searchedPosts = allPosts.filter((post) =>
        Object.values(post).some(
          (item) =>
            item !== undefined &&
            item !== null &&
            item.toString().toLowerCase().includes(inputValue.toLowerCase())
        )
      );

      setCurrentPosts(searchedPosts);
    }

  return (
    <div className="App">
    <h1 className="mt-5">News</h1>

    {/* フリーキーワード検索フォーム */}
    <div >
        <input className="m-3" type="text" value={inputValue} onChange={handleInputChange} />
        <Button  variant="outline-primary" onClick={search}>Search</Button>
    </div>

    {/* 記事一覧表示 */}
    {currentPosts.map((post, index) => {
      return (
        <Table  bordered hover variant="light" key={post.title}>

          <tbody>
          <tr>
            <td>{index + 1}. {post.title}</td>
          </tr>
          <tr>
            <td>Date：{post.date}</td>
          </tr>
          <tr>
            <td>{post.content}</td>
          </tr>
          </tbody>

        </Table>

      );
    })}
  </div>
  )
}

export default News