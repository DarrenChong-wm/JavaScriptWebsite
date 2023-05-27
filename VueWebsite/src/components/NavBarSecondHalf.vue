<template>
    <nav class="navbar">
    <!-- LOGO -->
        <div class="logo"></div>

        <!-- NAVIGATION MENU -->
        <ul class="nav-links">

        <!-- NAVIGATION MENUS -->
        <div class="menu">

            <li><a href="/">Main</a></li>
            
            

            <li class="algorithms">
            <a>Algorithms</a>

            <ul class="dropdown">
                <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
                <!-- <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li> -->
            </ul>

            </li>
<!-- 
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li> -->
        </div>
        </ul>
    </nav>


  </template>

<script>
export default {

}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: cursive;
  }

  a {
      text-decoration: none;
  }

  li {
      list-style: none;
  }

  .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      background-color: teal;
      color: #fff;
  }

  .nav-links a {
      color: #fff;
  }

  /* LOGO */
  .logo {
      font-size: 32px;
  }

  /* NAVBAR MENU */
  .menu {
      display: flex;
      gap: 1em;
      font-size: 18px;
  }

  .menu li:hover {
      background-color: #4c9e9e;
      border-radius: 5px;
      transition: 0.3s ease;
  }

  .menu li {
      padding: 5px 14px;
  }

  /* DROPDOWN MENU */
  .algorithms {
      position: relative; 
  }

  .dropdown {
      background-color: rgb(1, 139, 139);
      padding: 1em 0;
      position: absolute; /*WITH RESPECT TO PARENT*/
      display: none;
      border-radius: 8px;
      top: 35px;
  }

  .dropdown li + li {
      margin-top: 10px;
  }

  .dropdown li {
      padding: 0.5em 1em;
      width: 8em;
      text-align: center;
  }

  .dropdown li:hover {
      background-color: #4c9e9e;
  }

  .algorithms:hover .dropdown {
      display: block;
  }
</style>