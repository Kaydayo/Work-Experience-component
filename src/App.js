import React, { useState, useEffect } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import './App.css';



const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);


  const fetchApi = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
    return;
  }

  useEffect(() => {
    fetchApi()
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  const { title, duties, dates, company } = jobs[value];
  console.log(jobs)
  return (
    <main>
      <header>
        <div className="head">
          <header>
            <h1>My Experience</h1>
            <div className="underline"></div>
          </header>
        </div>
        <div className="body">
          <div className="company">
            {jobs.map((job, index) => {
              return (
                <button onClick={() => setValue(() => index)} key={job.id} >{job.company}</button>
              )
            })}
          </div>
          <div className="exp-body">
            <h2>{title}</h2>
            <h5>{company}</h5>
            <h4>{dates}</h4>
            {duties.map((duty) => <div className="each-duty" key={jobs.id} >
              < AiOutlineDoubleRight className="bullets" ></AiOutlineDoubleRight>
              <p>{duty}</p>
            </div>
            )}

          </div >
        </div>
      </header>

    </main>
  );
}

export default App;
