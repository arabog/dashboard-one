import React from 'react'

const Main = () => {
  return (
    <div className='main-content'>
      <header>
        <div className="menu-toggle">
          <label htmlFor="">
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
{/* 
          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>Sales</span>
                  <small>Number of sales</small>
                </div>

                <h2>$717,663</h2>

                <small>20% more sales</small>
              </div>

              <div className="card-chart">
                <span className="las la-chart-line"></span>
              </div>
            </div>
          </div> */}

        </div>


      </main>
    </div>
  )
}

export default Main