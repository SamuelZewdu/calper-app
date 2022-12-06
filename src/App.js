import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import {Navigate} from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [tgl, setTgl] =  useState(new Date())
  const tom = ['12-01-2022', '12-02-2022', '12-03-2022', '12-04-2022', '12-05-2022']

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div>
      <div>
      <h1 className='calper-div'>
        Calper
      </h1>
      </div>
      {/* <div className='w-full h-full p-10' >
         <Calendar className='w-96 h-full rounded-xl bg-violet-300' onChange={setTgl} value={tgl}></Calendar>
      </div> */}
      <Router>
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route exact path='/' element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
            }/>
            <Route path="/login" element={
              !currentUser?.emailVerified 
              ? <Login/>
              : <Navigate to='/' replace/>
            } />
            <Route path="/register" element={
              !currentUser?.emailVerified 
              ? <Register/>
              : <Navigate to='/' replace/>
            } />
            <Route path='/verify-email' element={<VerifyEmail/>} />
            <Route path='/calendar' element={<Calendar/>} />
            {/* tileClassName={({date}) => {
            let day = date.getDate()
            let month = month.getDate()+1
            if(date.getMonth()<10){
              month = '0'+month
            }
            if(date.getDate()<10) {
              day = '0'+day
            }
            const realDate = day+'-'+month+'-'+date.getFullYear()
            if(tom.find(val => val===realDate)) {
              return 'highlight'
            }
          }} */}
          </Routes>  
        </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
