// import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';
// import FeedbackData from '../data/FeedbackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/feedback?_sort=id&_order=desc`, {
      mode: 'cors',
    });
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //Set ITEM to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`${process.env.REACT_APP_API_URL}/feedback/${id}`, { method: 'DELETE', mode: 'cors' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Sending a Post request to server to update feedback data
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
      mode: 'cors',
    });

    const data = await response.json();
    console.log(data);
    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
      mode: 'cors',
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
