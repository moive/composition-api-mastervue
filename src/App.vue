<template>
	<nav class="nav-main">
		<router-link :to="{ name: 'home' }">Home</router-link> |
		<router-link :to="{ name: 'about' }">About</router-link> |
		<router-link :to="{ path: '/events' }">Events</router-link>
	</nav>
	<div class="container mx-auto">
		<div class="flex justify-center flex-col items-center">
			<router-view />
		</div>
	</div>
</template>
