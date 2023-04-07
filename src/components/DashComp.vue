<template>
  <div class="pageDash d-flex">
    <div class="sidebar bg-white">
      <h3 class="mt-0">KHM</h3>
      <ul>
        <li>
          <a
            class="active d-flex align-items-center text-dark"
            href="index.html"
          >
            <i class="fa-solid fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-center text-dark" href="#">
            <i class="fa-solid fa-user"></i>
            <span>User Profile</span>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-center text-dark" href="#">
            <i class="fa-solid fa-cart-arrow-down"></i>
            <span>Product List</span>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-center text-dark" href="#">
            <i class="fa-solid fa-bell"></i>
            <span>Notification</span>
          </a>
        </li>
        <li>
          <a class="d-flex align-items-center text-dark" href="#">
            <i class="fa-solid fa-gears"></i>
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content w-100">
      <!--Head start-->
      <div
        class="headD bg-white d-flex align-items-center justify-content-between"
      >
        <div class="search position-relative">
          <input type="search" placeholder="Search" />
        </div>
        <div class="icons d-flex align-items-center">
          <span class="notification position-relative">
            <i class="fa-solid fa-bell fa-lg"></i>
            <!-- <img src="imgs/avatar" alt="profile photo" /> -->
          </span>
          <i class="fa-solid fa-circle-user fa-lg"></i>
        </div>
      </div>
      <!--Head end-->
      <h1>Dashboard</h1>
      <div class="wrapper">
        <div class="welcome bg-white">
          <div class="intro d-flex justify-content-between p-3">
            <div>
              <h3>Welcome</h3>
              <p>welcome to our website</p>
            </div>
            <img
              src="https://th.bing.com/th/id/R.89af098af813a5df40cd750d69fde156?rik=m5q%2b%2fhbLrraL4A&pid=ImgRaw&r=0"
              alt="welcom img"
            />
          </div>
          <div class="bodyData">
            <div>KHM Website <span class="meta-data">for selling</span></div>
            <div>Product <span class="meta-data">Over 2000</span></div>
            <div>Price <span class="meta-data">00$</span></div>
          </div>
        </div>
        <div class="welcome bg-white">
          <div class="intro d-flex justify-content-between p-3">
            <div>
              <h3>About us</h3>
            </div>
          </div>
          <div class="bodyData">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo adipisci nemo deleniti laborum. Quibusdam, nulla
              consequatur? Natus neque, quo, cumque odio dolorem error eligendi
              repellat illo, eveniet quaerat consequuntur at.
            </div>
          </div>
        </div>
      </div>

      <div class="prdouct">
        <div class="row justify-content-around">
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img
                src="https://th.bing.com/th/id/OIP.JJxr1JboPmtn64wYyo44gQHaJA?pid=ImgDet&rs=1"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img
                src="https://th.bing.com/th/id/R.b63c0875b2179e0854d5fb9ba38899f8?rik=TIdHmoAj7lK%2b9w&riu=http%3a%2f%2fwww.lmfgroup.lk%2fwp-content%2fuploads%2f2017%2f10%2fAmbewela-Products.jpg&ehk=iWwcUG0%2fvWEkfGsHfsSNPAtVrBu2hPiere1sKzYNGEM%3d&risl=&pid=ImgRaw&r=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img
                src="https://th.bing.com/th/id/OIP.dcsOt3C8WReuBQQH4PAdswHaLH?pid=ImgDet&rs=1"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashComp",
};
</script>