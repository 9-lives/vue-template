const pathaComponent = () => import('components/pages/example/patha')

export default [
  {
    redirectTo: { name: 'patha' },
    path: '/example',
  },
  {
    component: pathaComponent,
    name: 'patha',
    path: '/example/patha',
  }
]
