<div class="container">
	<Navbar />
	<Main />
</div>

<style>
 :global(body) {
		margin: 0;
		font-family: Inter, sans-serif;
		height: 100vh;
		background-color: #282D35;
 }

 :global(nav) {
		display: flex;
		align-items: center;
		background-color: #21222A;
		height: 90px;
		padding: 30px 25px;
 }

 :global(.nav--logo_text, .nav--title) {
		margin: 0;
 }

:global(.nav--logo_text) {
		margin-right: auto;
    color: #e25036;
    font-weight: 700;
    font-size: 22px;
}

:global(.nav--title) {
		color: white;
		font-weight: 600;
}

:global(.nav--icon) {
		height: 30px;
		margin-right: 7px;
}

:global(main) {
		padding: 57px 27px;
    color: white;
    background-image: url(./images/react-icon-large.png);
    background-repeat: no-repeat;
    background-position: right 75%;
}

:global(.main--title) {
		margin: 0;
    font-size: 39px;
  	letter-spacing: -0.05em;
}

:global(.main--facts) {
		margin-top: 46px;
    max-width: 400px;
}

:global(.main--facts > li) {
		line-height: 19px;
    padding-block: 10px;
}

:global(.main--facts > li::marker) {
		font-size: 1.4rem;
    color: #e25036;
}

</style>

<script>
	import Main from './Main.svelte';
 	import Navbar from './Navbar.svelte';
</script>