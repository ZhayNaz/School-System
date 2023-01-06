<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#B2DFDB">Students Balance Info</v-card-title>
            <v-card-text><br>

                <!--#HERE WE CAN SEE THE STUDENTS LIST AND DATA  -->
                <v-data-table
                    :headers="studentNameHeader"
                    :items="studentInfo"
                    :search="search"
                    >
                        <template v-slot:top>
                            <v-text-field
                            v-model="search"
                            label="Search Students"
                            class="mx-4"
                            outlined
                            dense
                            append-icon="mdi-magnify"
                            />
                        </template>
                    <template v-slot:item.actions>
                        <v-btn
                            @click="checkStudentBalance()"
                            fab dark small 
                            color="success"
                            class="mx-2"
                            >
                            <v-icon dark>mdi-magnify-expand</v-icon>
                        </v-btn>
                        <v-btn 
                            @click="deleteItem()"
                            class="mx-2" 
                            fab dark small 
                            color="error" >
                            <v-icon dark>mdi-trash-can</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>

                <!-- IF OPEN WILL SEE THE BALANCE DATA OF THE STUDENT -->
                <v-dialog 
                    v-model="balanceDialog"
                    width="40%">
                    <v-card >
                        <v-card-title>Student Balance</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="9">tuition: </v-col>
                                <v-col cols="3">24,000 Php</v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="9">miscellaneous: </v-col>
                                <v-col cols="3">15,000 Php</v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-card-text>
        </v-card>
        <v-dialog>

        </v-dialog>
    </v-container>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    data () {
      return {
        search: '',
        balanceDialog: false,
        studentNameHeader: [
          {
            text: 'Students Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Year', value: 'year' },
          { text: 'Program', value: 'program' },
          { text: 'Semester', value: 'sem' },
          { text: 'Units', value: 'units' },
          { text: 'Actions', value: 'actions' },
        ],
        studentInfo: [
          {
            name: 'Garcia, Joseph Jeremy C.',
            year: 'First Year',
            program: 'BS CpE' ,
            sem: 'First Semester' ,
            units: 15,
            actions:'',
          },
          {
            name: 'Medina, John Ruiz C.',
            year: 'First Year',
            program: 'BS CpE' ,
            sem: 'First Semester' ,
            units: 24,
            actions:'',
          },
        ],
      }
    },
    methods: {
        checkStudentBalance() {
            this.balanceDialog = true
        },
        deleteItem (index) {
            Swal.fire({
                title: 'Do you want to continue deleting?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Delete',
                denyButtonText: `Don't Delete`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Deleted Student info', '', 'success')
                    this.studentInfo.splice(index, 1);
                } else if (result.isDenied) {
                    Swal.fire('Canceled Deleting Student info', '', 'info')
                }
            })
        }
    }
}
</script>