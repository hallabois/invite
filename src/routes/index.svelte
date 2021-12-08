<script lang="ts">
    import { base } from '$app/paths';
    let version = "1.0.0";
    function openInvite(){
        try{
            // @ts-ignore
            sa_event("click_join");
        }
        catch(e){}
        window.location.href = 'https://discord.gg/BMEWWprYbN';
    }
</script>

<svelte:head>
	<title>Invite</title>
    <link rel="icon" type="image/png" href="./favicon.png"/>
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
</svelte:head>

<main>
    <div class="card">
        <img src="{base}/favicon.png" alt="Hallabois logo">
        <h1>Join the Hallabois discord</h1>
        <!-- <hr style="width: 50%;" /> -->
        <div class="button-container">
            <button on:click={openInvite}>Join</button>
        </div>
    </div>
    <p class="info">Invite v. {version}</p>
    
    <!-- 100% privacy friendly analytics -->
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
</main>

<style>
    :global(html, body){
        height: 100%;
        margin: 0;
        padding: 0;
    }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;

        background-color: #252525;
        color: #fff;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    @keyframes focus{
        0% {
            box-shadow: 0em 0em 0em #00000077;
            transform: translateY(2em);
        }
        20% {
            box-shadow: 0em 0em 0em #00000077;
            transform: translateY(2em);
        }
        100% {
            box-shadow: 1em 2em .5em #00000033;
            transform: translateY(0);
        }
    }
    .card{
        max-width: 90vw;
        max-height: 80vh;
        background-color: #333;
        padding: 1em;
        border-radius: 2em;
        /* background: linear-gradient(#ffffff10,#00000010); */

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        box-shadow: 1em 2em .5em #00000033;
        animation-name: focus;
        animation-duration: 1.2s;
        animation-timing-function: cubic-bezier(0,0,.48,1.3);
    }
    h1{
        margin-bottom: 0px;
    }
    img{
        width: 120px;
        height: 120px;
        padding: 1em;
        background-color: #292929;
        border: 1px solid #444;
        border-radius: 25%;
    }
    .button-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button{
        border: none;
        padding: .2em 1.5em;
        border-radius: 3px;
        background: #5865f2;
        color: white;
        margin: 21.44px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;

        transition: background .25s;
    }
    button:hover{
        background: #4f60ce;
        cursor: pointer;
    }
    .info{
        font-size: .8em;
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>