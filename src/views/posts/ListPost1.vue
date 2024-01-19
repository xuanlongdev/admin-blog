<template>
  <CTable bordered border-color="primary" hover striped>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Tiêu đề</CTableHeaderCell>
        <CTableHeaderCell scope="col">Danh mục</CTableHeaderCell>
        <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
        <CTableHeaderCell scope="col">Hiển thị</CTableHeaderCell>
        <CTableHeaderCell scope="col">Tác giả</CTableHeaderCell>
        <CTableHeaderCell scope="col">Ngày viết</CTableHeaderCell>
        <CTableHeaderCell scope="col"></CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow v-for="post in posts">
        <CTableDataCell>{{ post.id }}</CTableDataCell>
        <CTableDataCell>
          <a href="">{{ post.title }}</a>
        </CTableDataCell>
        <CTableDataCell>
          <a href="">Bóng đá</a>
        </CTableDataCell>
        <CTableDataCell>
          <BadgeStatus :status="post.status" />
        </CTableDataCell>
        <CTableDataCell>
          <BadgeDisplay :status="post.display" />
        </CTableDataCell>
        <CTableDataCell>Zero</CTableDataCell>
        <CTableDataCell>11:20 18/01/2024</CTableDataCell>
        <CTableDataCell>
          <CButton color="info">Sửa</CButton>
          <CButton color="danger">Xóa</CButton>
        </CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script>
import BadgeStatus from "@/components/block/BadgeStatus.vue";
import BadgeDisplay from "@/components/block/BadgeDisplay.vue";

export default {
  components: {
    BadgeStatus,
    BadgeDisplay
  },
  data() {
    return {
      // columns: [
      //   {
      //     key: 'avatar',
      //     label: '',
      //     filter: false,
      //     sorter: false,
      //   },
      //   {
      //     key: 'name',
      //     _style: { width: '20%' },
      //   },
      //   'registered',
      //   { 
      //     key: 'role',
      //     _style: { width: '20%' }
      //   },
      //   { 
      //     key: 'status',
      //     _style: { width: '20%' }
      //   },
      //   {
      //     key: 'show_details',
      //     label: '',
      //     _style: { width: '1%' },
      //     filter: false,
      //     sorter: false,
      //   },
      // ],
      details: [],
      posts: [
        {
          id: 1,
          title: 'Đội hình Real Madrid xuất sắc nhất thế kỷ 21 gồm những ai?',
          slug: '1.jpg',
          status: 1,
          display: 1,
          user: "Zero",
          category: "Bóng đá",
          created_at: '2024/01/01',
        },
        {
          id: 2,
          title: 'Samppa Nori',
          slug: '1.jpg',
          status: 3,
          display: 1,
          user: "Zero",
          category: "Bóng đá",
          created_at: '2024/01/01',
        },
        {
          id: 2,
          title: 'Samppa Nori',
          slug: '1.jpg',
          status: 3,
          display: 1,
          user: "Zero",
          category: "Bóng đá",
          created_at: '2024/01/01',
        },
      ],
    }
  },
  methods: {
    toggleDetails(item) {
      if (this.details.includes(item._id)) {
        this.details = this.details.filter((_item) => _item !== item._id)
        return
      }
      this.details.push(item._id)
    },
  },
}
</script>
