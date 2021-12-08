<script lang="ts">
    import { onMount } from 'svelte'
    import { fade, fly } from 'svelte/transition';
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
    

    let skip_verify = true;
    let loaded = false;
    onMount(() => {
        skip_verify = !window.location.href.includes("challenge");
        loaded = true;
    });

    let verify_lines = ["SXPkIG1laWTkbiwgam9rYSBvbGV0IGthbnNsaWFzc2Eu","UHloaXRldHR5IG9sa29vbiBzaW51biBuaW1lc2ku","VHVsa29vbiBzaW51biBBQkMtbGFhamVubnVrc2VzaS4=","VGFwYWh0dWtvb24gc2ludW4gdGFodG9zaSw=","bXn2cyBLLWx1b2tpc3NhIG5paW4ga3VpbiBSZWRpc3PkLg==","QW5uYSBtZWlsbGUgdORu5CBw5Gl25G7kIG1laWTkbiBqb2thcORpduRpbmVuIG9wcGltbWUu","SmEgYW5uYSBtZWlsbGUgbWVpZORuIHBvaXNzYW9sb21tZSBhbnRlZWtzaSw=","bmlpbiBrdWluIG1la2luIGFudGVla3NpIGFubmFtbWUgbmlpbGxlLA==","am90a2Egb3ZhdCBtZWl05CB2YXN0YWFuIHJpa2tvbmVldC4=","xGzka+Qgc2FhdGEgbWVpdOQgcHJva3Jhc3Rpbm9pbWlzZWVuLA==","dmFhbiBw5ORzdOQgbWVpZOR0IGt1cnNzaXN0YSBs5HBpLg==","U2lsbOQgc2ludW4gb24gdmFsdGFrdW50YSBqYSB2b2ltYSBqYSBrdW5uaWEgaWFua2Fpa2tpc2VzdGkuIEFhbWVuLg=="]
    let no = "LWFobw==";
    let verified_all = false;
    let verified_index = 0;
    let verified_text = "";
    let current_target = "";
    $: verified_all = verified_index == verify_lines.length;
    $: if(verified_text == atob(verify_lines[verified_index])){
        verified_index++;
        verified_text = "";
    };
    $: if(verified_text.includes(atob(no))){
        verified_text = atob("TGF1cmkgSGFsbGEu");
        alert("Ei.");
    };
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
        {#if !verified_all && !skip_verify}
            <p>Please type the following to continue.</p>
            <div class="guide-container">
                {#each verify_lines as line, index}
                    {#if verified_index == index}
                        <p class="guide" in:fade="{{duration: 750, delay: 750 }}" out:fade={{duration: 750}}>{atob(line)}</p>
                    {/if}
                {/each}
            </div>
            <input type="text" id="verify" placeholder="Type it here. {verified_index + 1} out of {verify_lines.length}" bind:value={verified_text} autofocus />
        {/if}
        {#if verified_all || skip_verify}
            <div class="button-container" in:fade>
                <button id="join-btn" on:click={loaded? openInvite : null}>Join</button>
            </div>
        {/if}
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
    #verify{
        font-size: 15px;
        border: none;
        padding: .2em .5em;
        border-radius: 3px;
        width: 90%;
    }
    .guide{
        color: #2acee1;
        position:absolute;
    }
    .guide-container{
        height: 52px;
        width: 90%;
        margin: 16px;
        position: relative;
    }
</style>