<template>
	<h1 class="text-5xl font-bold mb-4">Uh-Oh!</h1>
	<h4 class="text-xl font-bold mb-4">
		It looks like you're experiencing some network issues, please take a breath
		and
		<a href="#" class="text-red-800" @click="$router.go(-1)">Click here</a> to
		try again.
	</h4>
</template>
