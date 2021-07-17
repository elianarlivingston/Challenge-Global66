<template>
    <article class="card-welcome">
        <div>
            <header>
                <h1 class="card-welcome__title">Welcome to Pokédex</h1>
            </header>

            <p class="card-welcome__text">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>

            <Button @click="goToHome">Get started</Button>
        </div>

        <figure class="card-welcome__image">
            <img src="../assets/Hero.svg" alt="">
        </figure>
    </article>
</template>

<script>
import { useRouter } from 'vue-router'
import { Button } from '../components/index'
import { useLoading } from '../hooks/index'

export default {
    name: 'Welcome',
    components: { Button },
    setup() {
        const router = useRouter()
        const { show } = useLoading()

        const goToHome = () => {
            show()
            
            router.push('/discover')
        }

        return { goToHome }
    }
}
</script>

<style scoped>
.card-welcome {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.card-welcome__title {
    font-size: 26px;
    line-height: 31px;
    font-weight: 700;
    color: var(--gray-600);
}
.card-welcome__text {
    font-size: 18px;
    line-height: 26px;
    color: var(--gray-500);
}
.card-welcome__image {
    width: 325px;
    height: 288px;
}
.card-welcome__image img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>