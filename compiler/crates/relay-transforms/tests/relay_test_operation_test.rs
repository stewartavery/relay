/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<83ef3f0f07b6241de41d1c8d97f48ff4>>
 */

mod relay_test_operation;

use relay_test_operation::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn prod_query_invalid() {
    let input = include_str!("relay_test_operation/fixtures/prod_query.invalid.graphql");
    let expected = include_str!("relay_test_operation/fixtures/prod_query.invalid.expected");
    test_fixture(transform_fixture, "prod_query.invalid.graphql", "relay_test_operation/fixtures/prod_query.invalid.expected", input, expected);
}

#[test]
fn test_client_fields_query() {
    let input = include_str!("relay_test_operation/fixtures/test_client_fields_query.graphql");
    let expected = include_str!("relay_test_operation/fixtures/test_client_fields_query.expected");
    test_fixture(transform_fixture, "test_client_fields_query.graphql", "relay_test_operation/fixtures/test_client_fields_query.expected", input, expected);
}

#[test]
fn test_query_with_enums() {
    let input = include_str!("relay_test_operation/fixtures/test_query_with_enums.graphql");
    let expected = include_str!("relay_test_operation/fixtures/test_query_with_enums.expected");
    test_fixture(transform_fixture, "test_query_with_enums.graphql", "relay_test_operation/fixtures/test_query_with_enums.expected", input, expected);
}

#[test]
fn test_simple_query() {
    let input = include_str!("relay_test_operation/fixtures/test_simple_query.graphql");
    let expected = include_str!("relay_test_operation/fixtures/test_simple_query.expected");
    test_fixture(transform_fixture, "test_simple_query.graphql", "relay_test_operation/fixtures/test_simple_query.expected", input, expected);
}
