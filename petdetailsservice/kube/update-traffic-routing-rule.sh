cat <<EOF | istioctl create -f -
apiVersion: config.istio.io/v1alpha2
kind: RouteRule
metadata:
  name: petdetailsservice-default
spec:
  destination:
    name: petdetailsservice
  route:
  - labels:
      version: v1
    weight: 90
  - labels:
      version: v2
    weight: 10
EOF
