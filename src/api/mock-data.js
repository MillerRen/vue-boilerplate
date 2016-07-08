import Mock from 'mockjs'

var data = Mock.mock({
  'messages|1-10': [{
    'id|+1': 0,
    'message': 'hello vue'
  }]
})

Mock.mock('/api/messages/0', data.messages[0])
