<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Tài khoản
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-bell" /> Thông báo
        <CBadge color="info" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-envelope-open" /> Tin nhắn
        <CBadge color="success" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Cài đặt
      </CDropdownHeader>
      <CDropdownItem> <CIcon icon="cil-user" /> Hồ sơ </CDropdownItem>
      <CDropdownItem> <CIcon icon="cil-settings" /> Cài đặt </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem> <CIcon icon="cil-lock-locked" /> Thoát </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>
