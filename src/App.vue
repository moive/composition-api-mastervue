<template>
	<nav class="nav-main">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/events">Events</router-link>
	</nav>
	<div class="container mx-auto">
		<div class="flex justify-center flex-col items-center">
			<router-view />
		</div>
	</div>
</template>
