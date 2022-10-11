import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
