import React from 'react'
import Layout from '../../components/layout'
function Trangchu() {
  return (
    <Layout>
       <div className="wrapper ">
        <div className="sidebar">
          {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */}
          
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul  className="nav">
              <li className="nav-item">
                <a className="nav-link" href="./dashboard.html">
                  <i className="now-ui-icons design_app" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./tables.html">
                  <i className="now-ui-icons design_bullet-list-67" />
                  <p>Table List</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel" id="main-panel">
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title"> Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <tr><th>
                              Name
                            </th>
                            <th>
                              Country
                            </th>
                            <th>
                              City
                            </th>
                            <th className="text-right">
                              Salary
                            </th>
                          </tr></thead>
                        <tbody>
                          <tr>
                            <td>
                              Dakota Rice
                            </td>
                            <td>
                              Niger
                            </td>
                            <td>
                              Oud-Turnhout
                            </td>
                            <td className="text-right">
                              $36,738
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Minerva Hooper
                            </td>
                            <td>
                              Curaçao
                            </td>
                            <td>
                              Sinaai-Waas
                            </td>
                            <td className="text-right">
                              $23,789
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Sage Rodriguez
                            </td>
                            <td>
                              Netherlands
                            </td>
                            <td>
                              Baileux
                            </td>
                            <td className="text-right">
                              $56,142
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Philip Chaney
                            </td>
                            <td>
                              Korea, South
                            </td>
                            <td>
                              Overland Park
                            </td>
                            <td className="text-right">
                              $38,735
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Doris Greene
                            </td>
                            <td>
                              Malawi
                            </td>
                            <td>
                              Feldkirchen in Kärnten
                            </td>
                            <td className="text-right">
                              $63,542
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Mason Porter
                            </td>
                            <td>
                              Chile
                            </td>
                            <td>
                              Gloucester
                            </td>
                            <td className="text-right">
                              $78,615
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Jon Porter
                            </td>
                            <td>
                              Portugal
                            </td>
                            <td>
                              Gloucester
                            </td>
                            <td className="text-right">
                              $98,615
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

export default Trangchu