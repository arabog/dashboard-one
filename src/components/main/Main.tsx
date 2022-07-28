import React from 'react'

const Main = () => {
  return (
    <div className='main-content'>
      <header>
        <div className="menu-toggle">
          <label htmlFor="sidebar-toggle">
            <span className="las la-bars"></span>
          </label>
        </div>

        <div className='header-icons'>
          <span className="las la-search"></span>
          <span className="las la-bookmark"></span>
          <span className="las la-sms"></span>
        </div>
      </header>

      <main>
        <label htmlFor="sidebar-toggle" className='body-label'></label>
        <div className="page-header">
          <div>
            <h1>Ananlytics Dashboard</h1>
            <small>Monitor Key Metrics. Check reporting and review insights</small>
          </div>

          <div className='header-actions'>
            <button>
              <span className="las la-file-export"></span>
              Export
            </button>

            <button>
              <span className="las la-tools"></span>
              Settings
            </button>
          </div>
        </div>

        <div className="cards">
          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>Purchases</span>
                  <small>Number of purchases</small>
                </div>

                <h2>17,663</h2>

                <small>2% less purchase</small>
              </div>

              <div className="card-chart danger">
                <span className="las la-chart-line"></span>
              </div>
            </div>
          </div>

          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>Unique Visitors</span>
                  <small>Number of visitors</small>
                </div>

                <h2>46,663</h2>

                <small>2% less visitors</small>
              </div>

              <div className="card-chart success">
                <span className="las la-chart-line"></span>
              </div>
            </div>
          </div>

          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>Refunds</span>
                  <small>Value of refunded orders</small>
                </div>

                <h2>$4,523.11</h2>

                <small>10% less refund</small>
              </div>

              <div className="card-chart yellow">
                <span className="las la-chart-line"></span>
              </div>
            </div>
          </div>
        </div>

          
        <div className="jobs-grid">
          <div className="analytics-card">
            <div className="analytics-head">
              <h2>Actions needed</h2>
              <span className="las la-ellipsis-h"></span>
            </div>

            <div className="analytics-chart">
              <div className="chart-circle">
                <h1>74%</h1>
              </div>

              <div className="analytics-note">
                <small>Note: Current sprint requires stakeholders meeting to reach conclusion</small>
              </div>
            </div>

            <div className="analytics-btn">
              <button>Generate report</button>
            </div>
          </div>

          <div className="jobs">
            <h2>Jobs <small>See all jobs <span className="las la-arrow-right"></span>
              </small>
            </h2>

            <div className="table-responsive">
              <table width="100%">
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>

                    <td>
                      <div>
                        Customer experience designer
                      </div>
                    </td>
                    <td>
                      <div>
                        Design
                      </div>
                    </td>
                    <td>
                      <div>
                        Nigeria Ng.
                      </div>
                    </td>

                    <td>
                      <div>
                        Posted 6 days ago
                      </div>
                    </td>

                    <td>
                      <div>
                        <button>8 applicants</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>

                    <td>
                      <div>
                        Software Development
                      </div>
                    </td>

                    <td>
                      <div>
                        Developer
                      </div>
                    </td>

                    <td>
                      <div>
                        Nigeria Ng.
                      </div>
                    </td>
                    
                    <td>
                      <div>
                        Posted 6 days ago
                      </div>
                    </td>

                    <td>
                      <div>
                        <button>8 applicants</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>

                    <td>
                      <div>
                        Customer experience designer
                      </div>
                    </td>
                    <td>
                      <div>
                        Design
                      </div>
                    </td>
                    <td>
                      <div>
                        Nigeria Ng.
                      </div>
                    </td>

                    <td>
                      <div>
                        Posted 6 days ago
                      </div>
                    </td>

                    <td>
                      <div>
                        <button>8 applicants</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>

                    <td>
                      <div>
                        Software Development
                      </div>
                    </td>

                    <td>
                      <div>
                        Developer
                      </div>
                    </td>

                    <td>
                      <div>
                        Nigeria Ng.
                      </div>
                    </td>
                    
                    <td>
                      <div>
                        Posted 6 days ago
                      </div>
                    </td>

                    <td>
                      <div>
                        <button>8 applicants</button>
                      </div>
                    </td>
                  </tr>                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main