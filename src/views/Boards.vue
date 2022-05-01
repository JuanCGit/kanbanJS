<template>
  <div class="container boards">
    <div>
        <div class="d-flex align-items-center">
            <h1 class="d-inline">Boards</h1>
            <div v-if="show">
                <input 
                type="text" 
                placeholder="Añade una lista"
                autofocus=""
                v-model="boardName"
                @keyup.enter="add()"
                style="margin-left: 10px;"/>
                <img @click="add()" src="@/assets/check.png" alt="check" >
            </div>
            <div v-else>
                <img @click="showAdd()" src="@/assets/add.png" alt="add" >
            </div>          
        </div>
        <div class="d-flex row-cols-4 justify-content-center row" style="margin-top: 50px;">
            <div class="col d-flex justify-content-center align-items-center cardBoard"
                v-for="(list, index) in boards"
                :key="index"
                :name="list.name">
                <div class="elipsisDiv">
                    <h3 class="elipsis">{{list.name}}</h3>
                </div>              
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "Kan-Boards",
  data () {
      return {
          boardName: '',
          boards: [
              {id: 1, name: 'Example'}
          ],
          show: false
      }
  },
    methods: {
        add() {
            if (!this.boardName) {
                this.popup("You cannot add a board without name", "error")
            } else {
                this.popup("Board added succesfully", "success")
                this.boards.push({name: this.boardName});
                this.boardName="";
                this.show = false;
            }             
        },
        showAdd() {
            this.show = true;
        },
        popup(message, status) {
            Swal.fire({
                icon: status,
                title: message,
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.boards {
  padding-top: 65px;
  padding-bottom: 65px;
}

.cardBoard {
    height: 150px;
    width: 300px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 25px;
    box-shadow: 0 30px 80px rgb(0 0 0 / 20%), 0 20px 70px rgb(0 0 0 / 20%);
    border-radius: 15px;
    margin-bottom: 50px;
    background-color: #ffe10070;
    h3 {
        font-weight: bold;
    }
}

img {
    margin-left: 10px;
    width: 35px;
    cursor: pointer;
}

.elipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.elipsisDiv {
    width: 250px;
}
</style>
