// import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useEffect, useState } from 'react'

const CommentArea = ({ asin }) => {
//  state = {
//    comments: [],
//    isLoading: false,
//    isError: false,
//  }

const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

//  componentDidUpdate = async (prevProps) => {
//    if (prevProps.asin !== this.props.asin) {
//      this.setState({
//        isLoading: true,
//      })
//      try {
//        let response = await fetch(
//          'https://striveschool-api.herokuapp.com/api/comments/' +
//            this.props.asin,
//          {
//            headers: {
//              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDQ4MDIzOTMsImV4cCI6MTcwNjAxMTk5M30.DJCkTokV2pCIztXL5QoZfhzCZYQj-TCUdvnE8T4WKMs',
//            },
//          }
//        )
//        console.log(response)
//        if (response.ok) {
//          let comments = await response.json()
//          this.setState({
//            comments: comments,
//            isLoading: false,
//            isError: false,
//          })
//        } else {
//          this.setState({ isLoading: false, isError: true })
//        }
//      } catch (error) {
//        console.log(error)
//        this.setState({ isLoading: false, isError: true })
//      }
//    }
//  }

useEffect(() => {
  if (asin) {
    fetchComments();
  }
}, [asin]);

const fetchComments = async () => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDQ4MDIzOTMsImV4cCI6MTcwNjAxMTk5M30.DJCkTokV2pCIztXL5QoZfhzCZYQj-TCUdvnE8T4WKMs',
      },
    });
    console.log(response);
    if (response.ok) {
      let comments = await response.json();
      setComments(comments);
      setIsError(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
    setIsError(true);
  }
};

    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  }

export default CommentArea
