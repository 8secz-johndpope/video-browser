<template>
    <div class="sidebar">
       <div class="brand-name" >
           <span>YouTube</span>
        </div>
       <div class="details">
           <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="details__avatar">
           <span class="details__name">
               Alexandra
           </span>
           <span class="details_surname">
               Barka
           </span>
           <button class="btn btn_details_edit">Edit Profile</button>
        </div>
       <div class="router_links">
           <ul class="sidebar_router">
               <li>
                   <span class="fas fa-film"></span>
                   Videos
               </li>
               <li>
                   <span class="fas fa-file-signature"></span>
                   Campaigns
               </li>
               <li>
                   <span class="far fa-star"></span>
                   Favorites
               </li>
               <li>
                   <span class="fas fa-list"></span>
                   Watchlist
               </li>
               <li>
                   <span class="fas fa-power-off"></span>
                   Signout
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
};
</script>

<style>
.sidebar {
    background-color: black;
    background-image: linear-gradient(
      rgba(29,39,51 ,0.85), 
      rgba(29,39,51, 0.85)
    ),url("https://images.unsplash.com/photo-1506422748879-887454f9cdff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
}
    .brand-name {
        background-color: #ED5060; 
        color: #fff;
        height: 50px; 
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.1rem;
    }

    .details {
        display: flex; 
        color: white; 
        flex-direction: column;
        align-items: center; 
        justify-content: center;
    }

    .details__avatar {
        border-radius: 50%;
        width: 50px;
        height: auto;
        margin-top: 38px;
    }

    .details__name {
        letter-spacing: 0.15rem;
        margin-top: 12px;
    }
    .details_surname {
        text-transform: uppercase;
    }

    .btn {
        border: 1px solid #666;
        border-radius: 18px;
        color: #666;
        margin-top: 8px;
        font-size: 12px;
        padding: 2px 24px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        position: relative;
    }

    .btn:hover {
        background-color: #666;
        color: #fff;
        bottom: 0;
        transition: all .5s ease-out;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.28);
    }

    .router_links {
        margin-top: 24px;
    }

    .sidebar_router {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .sidebar_router li{
        height: 45px;
        width: 100%;
        color: #ddd;
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .sidebar_router li:hover{
        background-color:#ED5060;
    }
    .sidebar_router li span{
        color: #ddd;
        margin-right: 12px;
    }
</style>