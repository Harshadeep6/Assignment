import './App.css'
import { BiSolidKey, BiCubeAlt } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { GiStamper } from 'react-icons/gi';
import { IoMdHelp } from 'react-icons/io';

function App() {

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div id='insideHeader'>
            <div className='dashboard'>
              <img id='logo' src="https://imgs.search.brave.com/14BnNKx-NCpaQDTbYA4Mw_DdyA6f4ljutGmEY6dQlRM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL251/dF8zMTgtNTQyNDk1/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="logo" />
              <span>Dashboard</span>
            </div>

            <div id='itemsCon'>
              <div className='navItemCon'>
                <BiSolidKey className='iconBr' />
                <a href='#' className='navLinks'>Dashboards</a>
              </div>
              <div className='navItemCon'>
                <BiCubeAlt className='iconBr' />
                <a href='#' className='navLinks'>Product</a>
              </div>
              <div className='navItemCon'>
                <AiOutlineUser className='iconBr' />
                <a href='#' className='navLinks'>Customers</a>
              </div>
              <div className='navItemCon'>
                <MdOutlineAttachMoney className='iconBr' />
                <a href='#' className='navLinks'>Income</a>
              </div>
              <div className='navItemCon'>
                <GiStamper className='iconBr' />
                <a href='#' className='navLinks'>Promote</a>
              </div>
              <div className='navItemCon'>
                <IoMdHelp className='iconBr' />
                <a href='#' className='navLinks'>Help</a>
              </div>
            </div>
          </div>

          <div className='profile'>
            <img src="https://imgs.search.brave.com/jX0M4ZpDieGsz-2WRfKDQ3jw7wpE2VCNEYCJNjIj57g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODAz/MDE1MTgyL3Bob3Rv/L3JvYmVydC1kb3du/ZXktanItYXR0ZW5k/cy10aGUtcHJlbWll/cmUtb2YtY29sdW1i/aWEtcGljdHVyZXMt/c3BpZGVyLW1hbi1o/b21lY29taW5nLWF0/LXRjbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TUR3UVBK/UlVNNnNrazhDT0RY/bGFwa0hiTTcwcUxf/XzFyZ2w2aXJwVF92/TT0" alt="" />
            <div>
              <div>Evano</div>
              <div id='post'>Project Manager</div>
            </div>
          </div>
        </div>

        <div className="notNav">
          <div className='greet'>
            <span>Hello Vickey! &#128079;,</span>
            <div id='theInputCon'>
              <input type="text" placeholder='Search' />
              <AiOutlineSearch id='theSearchIcon' />
            </div>
          </div>

          <div className="theGrid">
            <div className="top" id="top-1">
              <img src="https://imgs.search.brave.com/MlFXP7zaLWzKYbJglb21s256LxXNg7whgRCp7EiYCss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ybHYu/emNhY2hlLmNvbS8t/cjE4YjNkNmMzOTY5/ZDQ2YjBhZmJiOTBm/NDc3YmU1ZGZiXzB1/Z2QzXzhieXZyXzEz/MC5qcGc" alt="" />
              <div>
                <h6>Earning</h6>
                <h3>$198K</h3>
                <h6> <span>&#8593; 37.8%</span> this month</h6>
              </div>
            </div>
            <div className="top" id="top-2">
              <img src="https://imgs.search.brave.com/Q-yTmYgPZ0y3Y4bzINTFIDanC_gdOHBur9oZMtiTigs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wbGFuay1vcGVu/LXRleHRib29rLWlz/b2xhdGVkLWJhY2tn/cm91bmRfNDg4MjIw/LTMxMTQuanBnP3Np/emU9NjI2JmV4dD1q/cGc" alt="" />
              <div>
                <h6>Orders</h6>
                <h3>$2.4K</h3>
                <h6> <span>&#8595; 2%</span> this month</h6>
              </div>
            </div>
            <div className="top" id="top-3">
              <img src="https://imgs.search.brave.com/6YYIt5dwm9Z5ll4O_bLN6Ws2-qLLl4whvBFns9CGeLY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/OTM4NDk3Mi92ZWN0/b3IvZGF0YWJhc2Ut/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bXhFV1Ut/bWJWVzFFOVg4cElv/OTAyYkJEa2h4aGs4/cWtqbVJPNkpLUkxp/MD0" alt="" />
              <div>
                <h6>Balance</h6>
                <h3>$2.4K</h3>
                <h6> <span>&#8595; 2%</span> this month</h6>
              </div>
            </div>
            <div className="top" id="top-4">
              <img src="https://imgs.search.brave.com/3I6eqzfnCKVN0r06BHl0j5zxLl5VLnPQOQ3Omr_AY4g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/bXlsb3ZpZXcuZGUv/c3RpY2tlci9zaG9w/cGluZy1iYXNrZXQt/NDAwLTE4OTM2MDE3/Ny5qcGc" alt="" />
              <div>
                <h6>Total Sales</h6>
                <h3>$89K</h3>
                <h6> <span>&#8593; 11%</span> this month</h6>
              </div>
            </div>

            <div className="center-left">
              <div className="overviewCon">
                <div>
                  <h3>Overview</h3>
                  <h5>Monthly Earning</h5>
                </div>
                <select name="" id="">
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>

              <div className="theBarsBox">
                <div className="barCon">
                  <div className="bar" id='jan'></div>
                  <h6>Jan</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='feb'></div>
                  <h6>Feb</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='mar'></div>
                  <h6>Mar</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='apr'></div>
                  <h6>Apr</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='may'></div>
                  <h6>May</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='jun'></div>
                  <h6>Jun</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='jul'></div>
                  <h6>Jul</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='aug'></div>
                  <h6>Aug</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='sep'></div>
                  <h6>Sep</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='oct'></div>
                  <h6>Oct</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='nov'></div>
                  <h6>Nov</h6>
                </div>
                <div className="barCon">
                  <div className="bar" id='dec'></div>
                  <h6>Dec</h6>
                </div>
              </div>
            </div>
            
            <div className='pizza'>
                <h3>Customers</h3>
                <h5>Customers that buy products</h5>

                <div id='circleBG'>
                  <div id='newCus'>
                    <h3>65%</h3>
                    <span>Total New Customers</span>
                  </div>
                </div>
                <div id="smallArc"></div>
                <div id="bigArc"></div>
            </div>

            <div className="bottom">
              <div className="inventory">
                <h3>Product Sell</h3>
                <div>
                  <input id='invSearch' type="text" placeholder='Search' />
                  <AiOutlineSearch id='invIcon' />
                  <select name="" id="invDropdown">
                    <option value="last 30 days">Last 30 days</option>
                  </select>
                </div>
              </div>

              <div className="prNames">
                <h5>Product Name</h5>
                <div className="prDetails">
                  <h5>Stock</h5>
                  <h5>Price</h5>
                  <h5>Total Sales</h5>
                </div>
              </div>

              <div id='divider'></div>

              <div className='products'>
                  <div className='prNames'>
                    <img src="https://imgs.search.brave.com/ohPjIpTaOW7Vv0H_hQnyt-NQyNCBAfuSF9dFDyLwiDg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA5LzIw/ODYtY3J5c3RhbC1i/bHVlLW9jZWFuLTc0/OHg0NjguanBn" alt="" />
                    <div>
                      <h4>Abstract 3D</h4>
                      <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
                    </div>
                  </div>

                  <div className='prDetails'>
                    <h5>32 in stock</h5>
                    <b>$ 45.99</b>
                    <h5>20</h5>
                  </div>
              </div>

              <div className='products' id='justForMarginBottom'>
                  <div className='prNames'>
                    <img src="https://imgs.search.brave.com/Sqpz-eSB_UJkXqNp4sMZRipznRr7LMJ3XTvzhfQjn_M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzEyMy8zMTIv/NS9lYXJ0aC1wbGFu/ZXQtc3RhcnMtYmx1/ZS1tYXJibGUtd2Fs/bHBhcGVyLXRodW1i/LmpwZw" alt="" />
                    <div>
                      <h4>Sarphens Illustration</h4>
                      <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
                    </div>
                  </div>

                  <div className='prDetails'>
                    <h5>32 in stock</h5>
                    <b>$ 45.99</b>
                    <h5>20</h5>
                  </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App