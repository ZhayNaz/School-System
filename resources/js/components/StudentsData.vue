<template>
    <v-card>
        <v-card-title style="background-color:#B2DFDB">Students Data Info</v-card-title>
        <v-card-text><br>

            <!--#HERE WE CAN SEE THE STUDENTS LIST AND DATA  -->
            <v-data-table
                :headers="studentNameHeader"
                :items="studentName"
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
                    @click="editStudentData()"
                    fab dark small 
                    color="success"
                    class="mx-2"
                    >
                    <v-icon dark>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn 
                    @click="deleteStudentData(actions.item)"
                    class="mx-2" 
                    fab dark small 
                    color="error" >
                    <v-icon dark>mdi-trash-can</v-icon>
                  </v-btn>
                </template>
              </v-data-table>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
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
      studentName: [
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
      editStudentData() {
          console.log('click on ')
      }
  }
}
</script>