import '@aws-cdk/assert/jest';
import { App } from 'aws-cdk-lib';
import { MyCustomResourcesExample } from '../src/main';

test('Snapshot', () => {
  const app = new App();
  const stack = new MyCustomResourcesExample(app, 'test');

  expect(stack).not.toHaveResource('AWS::S3::Bucket');
  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});