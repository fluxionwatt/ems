# manager


## deploy

Helm（它是 K8s 事实上的包管理器），在 Rocky Linux 上安装非常简单：

```
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```


获取登录 Token
使用以下命令生成 Token，请保存输出的长字符串：

kubectl -n kubernetes-dashboard create token admin-user

```admin-user.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```

kubectl apply -f admin-user.yaml


### 发布

```bash
git tag -d $(git tag -l)
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
gh release create v1.0.0 --title "v1.0.0" --notes "This is the release notes for version 1.0.0"
```
