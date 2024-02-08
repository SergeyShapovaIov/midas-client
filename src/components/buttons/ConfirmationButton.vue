<script setup>
//здесб js код для элемента
</script>

<template>
 <button> 3 вида </button>
 <button disabled> 3 вида</button>
 <button class="confirm"> подтвердить заказ</button>
</template> 


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
button {
    width: 128px;
    height: 42px;
    background-color: transparent;
    background-repeat: no-repeat;
    border:1px solid #FBD13E;
    padding:5px;
    box-shadow:#0F0F11;
    /*transition: 0.3s;*/
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #FBD13E;
    text-transform: uppercase;  
    }
button:hover {
    background-color: transparent;
    background-repeat: no-repeat;
    border:1px solid #DBB325;
    color: #DBB325;
    }

button:active {
        background-color:#FBD13E;
        border:none;
        color: #000;
    }
button:disabled {
    width: 128px;
    height: 42px;
    background-color: transparent;
    background-repeat: no-repeat;
    border:1px solid #6D6D6D;
    box-shadow:#0F0F11;
    /*transition: 0.3s;*/
    font-family: Montserrat, sans-serif ;
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #6D6D6D;
    text-transform: uppercase;
    }


.confirm {
    width: 234px;
    height: 42px;
    background-color: #FBD13E;
    padding:5px;
    box-shadow:#0F0F11;
    /*transition: 0.3s;*/
    font-family: Montserrat, sans-serif ;
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 10%;
    text-align:center;
    color: #000;
    text-transform: uppercase;  
    display: grid;
    place-items: center;
    font-style: normal; 
    }
.confirm:hover {
    background-color: #DBB325;
    color: #000;
    }

.confirm:active {
        background-color:#000;
        color: #FBD13E;
    }
</style>